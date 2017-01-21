require 'test_helper'

class ReactSampleControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get react_sample_index_url
    assert_response :success
  end

  test "should get form" do
    get react_sample_form_url
    assert_response :success
  end

  test "should get bootstrap" do
    get react_sample_bootstrap_url
    assert_response :success
  end

  test "should get toolbox" do
    get react_sample_toolbox_url
    assert_response :success
  end

end
