
package com.mAadhar.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mAadhar.bean.Freshcard;

@Repository
public interface FreshcardRepository extends JpaRepository<Freshcard, Integer>{

}