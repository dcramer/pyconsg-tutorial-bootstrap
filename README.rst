Setup the environment:

::

	virtualenv ./env
	source ./env/bin/activate


Install dependencies:

::

	# python
	pip install -e .

	# node (tools)
	npm install

	# bower (js 3rd party)
	bower install


Initialize the database:

::

	bin/create-db


Load some dummy data:

::

	bin/load-mocks


Start the webserver:

::

	bin/web


Run Python tests:

::

	py.test


Run JavaScript tests:

::

	npm run test

