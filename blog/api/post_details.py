from __future__ import absolute_import, division, unicode_literals

from blog.api.base import Resource


class PostDetailsResource(Resource):
    def get(self, post_id):
        """
        Return information about a given post.
        """

    def post(self, post_id):
        """
        Edit an existing post.
        """
