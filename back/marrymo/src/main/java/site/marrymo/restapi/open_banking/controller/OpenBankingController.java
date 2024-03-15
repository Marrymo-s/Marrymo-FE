package site.marrymo.restapi.open_banking.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import site.marrymo.restapi.open_banking.dto.request.CodeRequest;
import site.marrymo.restapi.open_banking.dto.response.AccountInquiryResponse;
import site.marrymo.restapi.open_banking.dto.response.TokenApiResponse;
import site.marrymo.restapi.open_banking.service.OpenBankingService;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/open-banking")
public class OpenBankingController {
    private final OpenBankingService openBankingService;
    @PostMapping
    public ResponseEntity<AccountInquiryResponse> getUserAccountInfo(@Valid @RequestBody CodeRequest codeRequest){
        log.debug("code : " + codeRequest.getCode());

        //토큰 발급 api 호출
        TokenApiResponse tokenApiResponse = openBankingService.callTokenApi(codeRequest);

        //등록 계좌 조회 api 호출
        AccountInquiryResponse accountInquiryResponse = openBankingService.callAccountListApi(tokenApiResponse.getAccess_token(), tokenApiResponse.getUser_seq_no());
        return ResponseEntity.ok(accountInquiryResponse);
    }
}