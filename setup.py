from setuptools import setup, find_packages

tests_require = [
    'pytest>=2.5.0,<2.6.0',
]

install_requires = [
    'blinker>=1.3,<1.4',
    'flask>=0.10.1,<0.11.0',
    'flask-restful>=0.2.12,<0.3.0',
    'flask-sqlalchemy>=1.0,<1.1',
    'sqlalchemy==0.9.4',
]


setup(
    name='pyconsg-tutorial',
    version='0.0.0',
    description='',
    long_description=__doc__,
    packages=find_packages(),
    zip_safe=False,
    install_requires=install_requires + tests_require,
    include_package_data=True,
    classifiers=[
        '__DO NOT UPLOAD__',
    ],
)
