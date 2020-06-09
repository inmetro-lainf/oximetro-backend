from backend.oxi_app import create_app

app = create_app(config_env_var='FLASK_CONFIG')
app.run(debug=True, use_reloader=True)
