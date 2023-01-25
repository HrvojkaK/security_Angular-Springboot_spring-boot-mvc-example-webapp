package com.example.crud.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import com.example.crud.entity.Member;
import com.example.crud.service.MemberService;


@RestController
@RequestMapping("/members")
@CrossOrigin(origins = "http://localhost:4200")
public class MemberController {
	
	private MemberService memberService;

	@Autowired
	public MemberController(MemberService theMemberService) {
		memberService = theMemberService;
	}
		

	@GetMapping
	public ResponseEntity<List<Member>> getAllMembers() {
		return ResponseEntity.ok(memberService.findAll());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Member> getMember(@PathVariable int id) {
		return ResponseEntity.ok(memberService.findById(id));
	}
		

	@PostMapping
	public void createMember(@RequestBody Member theMember) {
		memberService.save(theMember);
	}

	@PutMapping
	public void updateMember(@RequestBody Member theMember){ // @Valid
		memberService.save(theMember);
	}


	@DeleteMapping("/{theId}")
	public void deleteMember(@PathVariable int theId) {
		memberService.deleteById(theId);
	}

	
	

}
