import json

from datetime import datetime

from blog.config import db
from blog.models import Post


def test_list(client):
    post1 = Post(
        title='Hello world!',
        body='Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        pub_date=datetime(2013, 9, 19, 22, 15, 24),
    )
    db.session.add(post1)

    post2 = Post(
        title='Hello world (again)!',
        body='Integer ullamcorper erat ac aliquam mollis.',
        pub_date=datetime(2013, 9, 20, 22, 15, 24),
    )
    db.session.add(post2)
    db.session.flush()

    resp = client.get('/api/0/posts/')

    assert resp.status_code == 200

    data = json.loads(resp.data.decode('utf-8'))

    assert len(data) == 2
    assert data[0]['id'] == post2.id
    assert data[1]['id'] == post1.id


def test_create_with_valid_params(client):
    title = 'Foo'
    body = 'Bar'

    # valid params
    resp = client.post('/api/0/posts/', data={
        'title': title,
        'body': body,
    }, follow_redirects=True)
    assert resp.status_code == 201

    data = json.loads(resp.data.decode('utf-8'))

    assert data['title'] == title
    assert data['body'] == body


def test_create_with_invalid_params(client):
    pass
