module ChallengesHelper
  def thumbnail(id)
    asset_exists?("#{id}_thumb") ? "#{id}_thumb" : 'notfound_thumb'
  end

  def asset_exists?(asset_name)
    Rails.application.assets.find_asset(asset_name) != nil
  end
end
