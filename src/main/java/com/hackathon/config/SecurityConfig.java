// package com.hackathon.config;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.http.HttpMethod;
// import
// org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import
// org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import
// org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
// import
// org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
// import org.springframework.security.config.http.SessionCreationPolicy;
// import org.springframework.security.web.SecurityFilterChain;
// import org.springframework.security.web.savedrequest.NullRequestCache;

// @EnableWebSecurity
// public class SecurityConfig extends WebSecurityConfiguration {

// @Override
// protected void configure(HttpSecurity http) throws Exception {
// http
// .authorizeRequests()
// .antMatchers("/api/post").permitAll()
// .anyRequest().authenticated()
// .and()
// .formLogin()
// .and()
// .httpBasic();
// }
// }