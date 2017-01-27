module SocketGlobalChatsHelper
  #Example
  #secret = get_secret("Vq2aQ/lrlIxQKg8KBy2sSVNFWTa08fAueBVMDasIYFikE6GCPVYa+smDZdyo/suI", 'salt')
  #data   = socket_data({key1: 'value', key2: 'value'}, timestamp=nil)
  #signature = sign(secret, data, digest_type="sha256", opts = [])
  #
  #Phoenix side 
  #Phoenix.Token.verify(socket, "salt", token, max_age: @max_age, key_digest: :sha)
  #Phoenix.Token.verify("Vq2aQ/lrlIxQKg8KBy2sSVNFWTa08fAueBVMDasIYFikE6GCPVYa+smDZdyo/suI", "salt", signature, max_age: @max_age, key_digest: :sha)

  def socket_data(data, signed=nil)
  	signed ||= (Time.now.to_f * 1000).to_i#timestamp
  	#message = { data: Erlang::Map[*(data.to_a).flatten],
  	#            signed: signed
  	#}
  	message = { data: Erlang::Map[*(data.to_a).flatten],
  	            signed: signed
  	}
  	erlang_map = Erlang::Map[*(message.to_a).flatten]
    Erlang.term_to_binary(erlang_map)
  end

  def get_secret(secret_key_base, salt, opts = {iterations: 1000}, key_size = 32)
    ActiveSupport::KeyGenerator.new(secret_key_base, opts).generate_key(salt, key_size)
  end
  
  def sign(secret, data, digest_type="sha256", opts = [])
  	hmac_sha2_protected = hmac_sha2_to_protected(digest_type)

  	digest_type_base64 = Base64.urlsafe_encode64(hmac_sha2_protected)
    payload_base64     = Base64.urlsafe_encode64(data)

    plain_text = "#{digest_type_base64}.#{payload_base64}"

    
    digest = OpenSSL::Digest.new(digest_type)

    signature = OpenSSL::HMAC.digest(digest, secret, plain_text)

    plain_text + "." + Base64.urlsafe_encode64(signature)
  end

  def hmac_sha2_to_protected(digest_type)
    case digest_type
    when 'sha256'
      "HS256"
    when 'sha384'
      "HS384"
    when 'sha512'
      "HS512"
    else 
      ""
    end
  end

end
