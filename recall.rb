require "sinatra"
require "data_mapper"
require "json"

DataMapper::setup(:default, "sqlite3://#{Dir.pwd}/recall.db")

class Note
	include DataMapper::Resource
	property :id, Serial
	property :content, Text, :required => true
	property :complete, Boolean, :required => true, :default => false
	property :created_at, DateTime
	property :updated_at, DateTime
end

DataMapper.finalize.auto_upgrade!


get '/' do
	@notes = Note.all :order => :id.desc
	@title = 'All Notes'
	erb :home
end

post '/' do
	n            = Note.new
	n.content    = params[:content]
	n.created_at = Time.now
	n.updated_at = Time.now
	n.save
	redirect '/'
end

get '/api' do
	content_type :json
	@notes = Note.all(:order => :id.desc).to_json
end

get '/:id' do
	@note = Note.get params[:id]
	@title = "Edit note #{params[:id]}"
	erb :edit
end

put '/:id' do
	n            = Note.get params[:id]
	n.content    = params[:content]
	n.complete   = params[:complete] ? 1 : 0 
	n.updated_at = Time.now
	n.save
	redirect '/'
end

get	'/:id/delete' do
	@note = Note.get params[:id]
	@title = "Confirm deletion of #{params[:id]}"
	erb :delete
end

get '/:id/complete' do
	n            = Note.get params[:id]
	n.complete   = params[:complete] ? 0 : 1
	n.updated_at = Time.now
	n.save
	redirect '/'
end

delete '/:id' do
	n = Note.get params[:id]
	n.destroy
	redirect '/'
end














