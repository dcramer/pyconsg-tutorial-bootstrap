from __future__ import absolute_import, division, unicode_literals

from blog.api.base import Resource


class PostIndexResource(Resource):
    def get(self):
        """
        Return a list of posts.
        """

    def post(self):
        """
        Create a new post.
        """
