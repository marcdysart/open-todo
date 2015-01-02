require 'spec_helper'

describe Api::UsersController do


  before do
    User.destroy_all
    @user =  FactoryGirl.create(:user, username:'name1', password: 'pass1')
    @user2 =  FactoryGirl.create(:user, username:'name2', password: 'pass2')
    @user3 =  FactoryGirl.create(:user, username:'name3', password: 'pass3')
  end


  describe "create" do

    @user = FactoryGirl.create(:user)

    it "creates and returns a new user from username and password params" do
      params = {:user_id => @user.id, :password => @user.password, :user => { username: 'testuser', password: 'testpass' } }

      expect{ post :create, params }
        .to change{ User.where(params[:user]).count }
        .by 1
        JSON.parse(response.body) == params[:user]
        puts response.body.inspect
    end

    it "returns an error when not given a password" do
      post :create, {:user_id => @user.id, :password => @user.password, :user => {username: 'testuser' } }
      response.should be_error
    end

    it "returns an error when not given a username" do
      post :create, {:user_id => @user.id, :password => @user.password, :user => {password: 'testpass' } }
      response.should be_error
    end


  end # create

  describe "index" do

    it "lists all usernames and ids" do
      get :index, {:user_id => @user.id, :password => @user.password}

      JSON.parse(response.body).should ==
        { 'users' =>
          [
            { 'id' => @user.id, 'username' => 'name1' },
            { 'id' => @user2.id, 'username' => 'name2' },
            { 'id' => @user3.id, 'username' => 'name3' }
          ]
        }
    end
  end # index
end # describe
