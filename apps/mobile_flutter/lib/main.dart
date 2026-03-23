import "package:flutter/material.dart";
import "config/app_constants.dart";

const Color kAccentColor = Color(0xFFC9985D);
const Color kDarkBackgroundColor = Color(0xFF0F1115);
const Color kDarkSurfaceColor = Color(0xFF171A21);

void main() {
  runApp(const PostSchedulerApp());
}

class PostSchedulerApp extends StatelessWidget {
  const PostSchedulerApp({super.key});

  @override
  Widget build(BuildContext context) {
    final ThemeData darkTheme = ThemeData(
      brightness: Brightness.dark,
      colorScheme: const ColorScheme.dark(
        primary: kAccentColor,
        surface: kDarkSurfaceColor,
      ),
      scaffoldBackgroundColor: kDarkBackgroundColor,
      useMaterial3: true,
    );

    return MaterialApp(
      title: AppConstants.appName,
      debugShowCheckedModeBanner: false,
      themeMode:
          AppConstants.darkModeEnabledByDefault ? ThemeMode.dark : ThemeMode.system,
      darkTheme: darkTheme,
      home: const HomeScreen(),
    );
  }
}

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(AppConstants.mainTitle),
      ),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: const <Widget>[
              Icon(Icons.schedule_rounded, size: 56),
              SizedBox(height: 16),
              Text(
                AppConstants.subtitle,
                textAlign: TextAlign.center,
              )
            ],
          ),
        ),
      ),
    );
  }
}
