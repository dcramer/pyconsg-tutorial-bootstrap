from flask import render_template
from flask.views import MethodView


class IndexView(MethodView):
    def get(self, path=''):
        """
        Render an identical template given any path.

        This allows use to treat URLs generically and support html5 mode
        in Angular.js.
        """
        return render_template('index.html')
