package com.daniilcebanu.product.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.daniilcebanu.product.ProductRepository;
import com.daniilcebanu.product.dto.Product;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class ProductService {
  private ProductRepository productRepository;

  public ProductService(ProductRepository productRepository) {
    this.productRepository = productRepository;
  }

  public String addProduct(Product product) {
    log.info("Adding the product");
    productRepository.save(product);

    return "Product added successfully";
  }

  public List<Product> listAllProducts() {
    log.info("Listing products");
    return productRepository.findAll();
  }

  public List<Product> productCategoryList(String category) {
    log.info("Listing products by category");
    return productRepository.findByCategory(category);
  }

  public Product productById(Integer id) {
    log.info("Finding product by id");
    return productRepository.findById(id).get();
  }

  public String updateProduct(Product product) {
    log.info("Updating the product");
    productRepository.save(product);

    return "Product updated successfully";
  }

  public String deleteProductById(Integer id) {
    log.info("Deleting the product");
    productRepository.deleteById(id);

    return "Product deleted";
  }
}
