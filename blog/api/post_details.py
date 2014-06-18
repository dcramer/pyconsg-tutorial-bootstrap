from __future__ import absolute_import, division, unicode_literals

from blog.api.base import Resource
from blog.models import Post


class PostDetailsResource(Resource):
    def get(self, post_id):
        """
        Return information about a given post.
        """
        post = Post.query.get(post_id)
        if post is None:
            return '', 404

        return {
            'id': post.id,
            'title': post.title,
            'body': post.body,
            'pubDate': post.pub_date.isoformat(),
        }

    def post(self, post_id):
        """
        Edit an existing post.
        """
