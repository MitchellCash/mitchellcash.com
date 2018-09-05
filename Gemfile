source "https://rubygems.org"

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
gem "jekyll", "~> 3.8.3"

# If you have any plugins, put them here!
group :jekyll_plugins do
    gem "jekyll-assets", "~> 3.0.11"
    gem "jekyll-feed"
    gem "jekyll-sitemap"

    # Required for jekyll-assets JavaScript minification
    gem "uglifier", "~> 4.1.18"

    # Required for jekyll-assets image optimisation
    gem "image_optim", "~> 0.26.2"
    gem "image_optim_pack", "~> 0.5.1"

    # Required for HTML checking in CI pipeline
    gem "html-proofer", "~> 3.9.2"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0" if Gem.win_platform?
