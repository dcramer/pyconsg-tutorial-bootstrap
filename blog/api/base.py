from flask import current_app
from flask.ext import restful
from time import sleep


class Resource(restful.Resource):
    def dispatch_request(self, *args, **kwargs):
        # XXX: Because this is a demo we want it to appear as if requests to
        # the API are slow, so we induce a delay
        if current_app.config['INDUCE_API_DELAY']:
            sleep(1)

        return super(Resource, self).dispatch_request(*args, **kwargs)
