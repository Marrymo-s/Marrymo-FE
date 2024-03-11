package site.marrymo.restapi.wishitem.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import site.marrymo.restapi.user.repository.UserRepository;
import site.marrymo.restapi.wishitem.repository.WishItemRepository;

@Service
@Slf4j
@RequiredArgsConstructor
public class WishItemService {
    private final UserRepository userRepository;
    private final WishItemRepository wishItemRepository;

    public void registWishItem(Long userSequence, )
}
