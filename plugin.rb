# name: purple-tentacle
# about: A sample plugin showing how to add a plugin route
# version: 0.1
# authors: Robin Ward
# url: https://github.com/discourse/purple-tentacle
# transpile_js: true

enabled_site_setting :purple_tentacle_enabled

register_svg_icon "eye"
add_admin_route 'purple_tentacle.title', 'purple-tentacle'

Discourse::Application.routes.append do
  get '/admin/plugins/purple-tentacle' => 'admin/plugins#index'
end
