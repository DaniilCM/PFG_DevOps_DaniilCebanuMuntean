package com.daniilcebanu.product.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.daniilcebanu.product.dto.Product;
import com.daniilcebanu.product.service.ProductService;

import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/v1")
public class ProductController {
  private ProductService productService;

  public ProductController(ProductService productService) {
    this.productService = productService;
  }

  @PostMapping("/addProduct")
  ResponseEntity<Product> addProduct(@RequestBody @Valid Product product) {
    String status = productService.addProduct(product);
    log.info("Product added status - {}", status);

    return ResponseEntity.status(HttpStatus.CREATED).body(product);
  }

  @GetMapping("/productList")
  List<Product> productList() {
    return productService.listAllProducts();
  }

  @GetMapping("/productList/{category}")
  List<Product> productCategoryList(@PathVariable String category) {
    return productService.productCategoryList(category);
  }

  @GetMapping("/product/{id}")
  Product productById(@PathVariable String id) {
    return productService.productById(id);
  }

  @PutMapping("/productUpdate")
  String updateProduct(@RequestBody Product product) {
    return productService.updateProduct(product);
  }

  @DeleteMapping("/product/{id}")
  String deleteProductById(@PathVariable String id) {
    return productService.deleteProductById(id);
  }
}
