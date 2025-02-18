import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:image_task/app/utils.dart/web_click_actions.dart';

class HomeController extends GetxController {
  final TextEditingController mTextcontroller = TextEditingController();
  var imageUrl = ''.obs;

  // Function to validate if the provided URL is a valid image URL
  bool isValidImageUrl() {
    // Regular expression to match image URLs (supports multiple image formats)
    final RegExp imageRegex = RegExp(
      r'^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp))$', // Matches URLs with image extensions
      caseSensitive: false, // Makes the regex case-insensitive
    );

    // Checks if the current text in the text controller matches the image URL pattern
    return imageRegex.hasMatch(mTextcontroller.text);
  }

  // Function to call the Show Context Menu from Web Click Actions
  void showContextMenu() {
    WebClickActions().showContextMenu();
  }

  // Function to call the Image Full View from Web Click Actions
  void openFullView() {
    WebClickActions().imageFullView(imageUrl: imageUrl.value);
  }
}
