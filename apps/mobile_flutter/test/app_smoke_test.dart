import "package:flutter/material.dart";
import "package:flutter_test/flutter_test.dart";
import "package:post_scheduler_mobile/main.dart";

void main() {
  testWidgets("renders app shell", (WidgetTester tester) async {
    await tester.pumpWidget(const PostSchedulerApp());
    await tester.pumpAndSettle();

    expect(find.byType(MaterialApp), findsOneWidget);
    expect(find.text("To Share"), findsOneWidget);
  });
}
