import sys
from backend.oxi_app import create_app

_mode = sys.argv[1] if len(sys.argv) > 1 else 'development'
app = create_app(mode=_mode)
app.run(**app.config.get_namespace('RUN_'))
