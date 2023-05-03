package com.portfolio.pkkk.pkkk.dto.store;

import com.portfolio.pkkk.pkkk.dto.user.getUserRespInfo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class storeRespDto {
	private int storeId;
	private String storeLat;
	private String storeLng;
	
}
