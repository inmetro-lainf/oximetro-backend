import pytest
import unittest
from backend.oxi_app import create_app
from flask import request

class AppTest(unittest.TestCase):
    def setUp(self):
        self.app = create_app(config_env_var="FLASK_CONFIG_TEST")

    @pytest.mark.xfail
    def test_request_args(self):
        with self.app.test_request_context('/?name=PauloNascimento'):
            self.assertEqual(request.args.get('name'), 'PauloNascimento')
