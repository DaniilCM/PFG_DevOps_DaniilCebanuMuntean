package com.daniilcebanu.product.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.daniilcebanu.exception.NotValidDiscountException;
import com.daniilcebanu.product.dto.Product;
import com.daniilcebanu.product.repository.ProductRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class ProductService {
  private ProductRepository productRepository;

  public ProductService(ProductRepository productRepository) {
    this.productRepository = productRepository;
  }

  public String addProduct(Product product) {
    if (product.getPrice() == 0 && product.getDiscount() > 0) {
      throw new NotValidDiscountException("Can't apply a discount to a free product");
    }

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

  public Product productById(String id) {
    log.info("Finding product by id");
    return productRepository.findById(id).get();
  }

  public String updateProduct(Product product) {
    log.info("Updating the product");
    productRepository.save(product);

    return "Product updated successfully";
  }

  public String deleteProductById(String id) {
    log.info("Deleting the product");
    productRepository.deleteById(id);

    return "Product deleted successfully";
  }
}
