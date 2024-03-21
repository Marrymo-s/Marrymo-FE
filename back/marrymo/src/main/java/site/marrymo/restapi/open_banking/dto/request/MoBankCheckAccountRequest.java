package site.marrymo.restapi.open_banking.dto.request;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class MoBankCheckAccountRequest {
    String bankCode;
    String accountNum;
}
