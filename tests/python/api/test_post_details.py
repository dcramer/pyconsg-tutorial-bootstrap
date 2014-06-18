import json

from datetime import datetime

from blog.config import db
from blog.models import Post


def test_valid_post_on_get(client):
    post = Post(
        title='Hello world!',
        body='Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    )
    db.session.add(post)
    db.session.commit()

    resp = client.get('/api/0/posts/{0}/'.format(post.id))

    assert resp.status_code == 200
    assert resp.headers['Content-Type'] == 'application/json', resp.data
    assert json.loads(resp.data.decode('utf-8')) == {
        'id': post.id,
        'title': post.title,
        'body': post.body,
        'pubDate': post.pub_date.isoformat(),
    }


def test_invalid_post_on_get(client):
    pass
