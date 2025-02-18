import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_widget_from_html_core/flutter_widget_from_html_core.dart';

import 'package:get/get.dart';

import '../controllers/home_controller.dart';

class HomeView extends GetView<HomeController> {
  const HomeView({super.key});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: Obx(
        () => Padding(
          padding: const EdgeInsets.fromLTRB(32, 16, 32, 16),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Expanded(
                child: AspectRatio(
                  aspectRatio: 1,
                  child: Container(
                      height: 300.0,
                      width: 300.0,
                      decoration: BoxDecoration(
                        color: controller.imageUrl.value.isNotEmpty
                            ? const Color(0xFFfef8ff)
                            : Colors.grey,
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: InkWell(
                        onDoubleTap: () {
                          controller.openFullView();
                        },
                        child: HtmlWidget(
                          // the first parameter (`html`) is required
                          '''
                            <img src="${controller.imageUrl.value}" alt="An image">
                          ''',
                          onLoadingBuilder:
                              (context, element, loadingProgress) =>
                                  const CircularProgressIndicator(),
                        ),
                      )),
                ),
              ),
              const SizedBox(height: 8),
              Row(
                children: [
                  Expanded(
                    child: TextField(
                      controller: controller.mTextcontroller,
                      decoration: const InputDecoration(hintText: 'Image URL'),
                    ),
                  ),
                  ElevatedButton(
                    onPressed: () {
                      if (controller.isValidImageUrl()) {
                        controller.imageUrl.value =
                            controller.mTextcontroller.text;
                      }
                    },
                    child: const Padding(
                      padding: EdgeInsets.fromLTRB(0, 12, 0, 12),
                      child: Icon(Icons.arrow_forward),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 64),
            ],
          ),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          if (kIsWeb) {
            controller.showContextMenu();
          }
        },
        child: const Icon(Icons.add),
      ),
    );
  }
}
