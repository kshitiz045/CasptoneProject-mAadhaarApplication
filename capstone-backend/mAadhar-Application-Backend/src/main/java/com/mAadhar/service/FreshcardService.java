package com.mAadhar.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mAadhar.repository.FreshcardRepository;
import com.mAadhar.bean.Freshcard;
@Service
public class FreshcardService {
	
	@Autowired
	FreshcardRepository freshcard ;
	
	public String storeAadharCardDetails(Freshcard card) {
		freshcard.save(card);
		return "details stored";
	}
	public String updateAadharCardDetails(Freshcard card) {
		Optional<Freshcard> result  = freshcard.findById(card.getId());
		if(result.isPresent()) {
			Freshcard p = result.get();
			p.setEmailid(card.getEmailid());
			p.setNumber(card.getNumber());
			p.setAddress(card.getAddress());
			freshcard.saveAndFlush(p);
			return "Details updated successfully";
		}else {
			return "Details not present";
		}
	}
	
	public List<Freshcard> allCards() {
		return freshcard.findAll();
	}
	
	public String deleteCard(int id) {
		Optional<Freshcard> result  = freshcard.findById(id);
		if(result.isPresent()) {
			Freshcard p = result.get();
			freshcard.delete(p);
			return "Product deleted successfully";
		}else {
			return "Product not present";
		}
	}
	public String findCardById(int id) {
		Optional<Freshcard> result  = freshcard.findById(id);
		if(result.isPresent()) {
			Freshcard p = result.get();
			return p.toString();
		}else {
			return "Product not present";
		}
	}
}
