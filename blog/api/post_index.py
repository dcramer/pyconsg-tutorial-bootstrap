from __future__ import absolute_import, division, unicode_literals

from flask.ext.restful.reqparse import RequestParser

from blog.api.base import Resource
from blog.config import db
from blog.models import Post


class PostIndexResource(Resource):
    def get(self):
        """
        Return a list of posts.
        """
        post_list = Post.query.order_by(
            Post.pub_date.desc()
        )[:10]

        results = []
        for post in post_list:
            results.append({
                'id': post.id,
                'title': post.title,
                'body': post.body,
                'pubDate': post.pub_date.isoformat(),
            })

        return results

    def post(self):
        """
        Create a new post.
        """
        parser = RequestParser()
        parser.add_argument('title', required=True)
        parser.add_argument('body', required=True)

        args = parser.parse_args()

        post = Post(
            title=args.title,
            body=args.body,
        )
        db.session.add(post)
        db.session.commit()

        return {
            'id': post.id,
            'title': post.title,
            'body': post.body,
            'pubDate': post.pub_date.isoformat(),
        }, 201
