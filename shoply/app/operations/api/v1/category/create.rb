require 'dry/matcher/either_matcher'

class API::V1::Category::Create
  include Dry::Monads::Either::Mixin
  include Dry::Matcher.for(:call, with: Dry::Matcher::EitherMatcher)

  def initialize(repo)
    @repo = repo
  end

  def call(params)
    result = API::V1::CategoryValidator.(params)

    if result.success?
      Right(repo.create(result.to_h))
    else
      Left(result.errors)
    end
  end

  private

  attr_reader :repo
end
