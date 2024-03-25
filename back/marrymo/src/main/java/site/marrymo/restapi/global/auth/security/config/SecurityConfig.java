package site.marrymo.restapi.global.auth.security.config;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import site.marrymo.restapi.global.auth.security.handler.OAuth2LoginSuccessHandler;
import site.marrymo.restapi.global.auth.security.service.CustomOAuth2UserService;

@Slf4j
@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {
    private final CustomOAuth2UserService customOAuth2UserService;
    private final OAuth2LoginSuccessHandler oAuth2LoginSuccessHandler;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
        http.csrf(AbstractHttpConfigurer::disable)
                .sessionManagement((sessionManagement) ->
                        sessionManagement.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
<<<<<<< HEAD
                .authorizeRequests().anyRequest().permitAll()
                .requestMatchers("/error").permitAll()
                .requestMatchers("/v3/**", "/swagger-ui/**", "/api-docs/**").permitAll()
=======
                .authorizeRequests()
                .requestMatchers("/error").permitAll()
                .requestMatchers("/v3/**", "/swagger-ui/**", "/api-docs/**").permitAll()
                .anyRequest().permitAll()
>>>>>>> 8eb52c8940c88154d29d7b46a8f56958c869c932
                .and()
                .oauth2Login((oauth2) -> oauth2
                        .successHandler(oAuth2LoginSuccessHandler)
                        .userInfoEndpoint(userInfoEndpoint -> userInfoEndpoint
                                .userService(customOAuth2UserService)));
        return http.build();
    }
}