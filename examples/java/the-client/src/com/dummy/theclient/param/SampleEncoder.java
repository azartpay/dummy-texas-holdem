package com.dummy.theclient.param;

import javax.websocket.EncodeException;
import javax.websocket.EndpointConfig;

public class SampleEncoder implements javax.websocket.Encoder.Text<String> {

	public void init(EndpointConfig paramEndpointConfig) {
		//Auto-generated method stub
		System.out.println("Encoder init: " + paramEndpointConfig.getUserProperties());
	}

	public void destroy() {
		//Auto-generated method stub
	}

	public String encode(String paramT) throws EncodeException {
		//Auto-generated method stub
		System.out.println("encode: " + paramT);
		return paramT;
	}
}
