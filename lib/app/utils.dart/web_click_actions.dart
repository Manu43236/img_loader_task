import 'dart:js' as js;

class WebClickActions {
  /// Function to open an image in full view by calling a JavaScript method
  void imageFullView({imageUrl}) {
    /// Calls the JavaScript function 'openFullView' and passes the image URL as an argument
    js.context.callMethod('openFullView', [imageUrl]);
  }

  // Function to show a context menu at a specific position
  void showContextMenu() {
    // Defines the x and y coordinates where the context menu should appear
    double x = 300;
    double y = 450;

    // Calls the JavaScript method 'showContextMenuFlutter' and passes the x and y coordinates as arguments
    js.context.callMethod('showContextMenuFlutter', [x, y]);
  }
}
