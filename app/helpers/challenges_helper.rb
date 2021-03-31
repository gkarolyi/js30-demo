module ChallengesHelper
  def thumbnail(id)
    asset_exists?("#{id}_thumb") ? "#{id}_thumb.jpg" : 'notfound_thumb.jpg'
  end

  def asset_exists?(asset_name)
    Rails.application.assets.find_asset(asset_name) != nil
  end
end
