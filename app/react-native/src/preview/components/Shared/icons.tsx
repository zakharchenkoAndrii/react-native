import React from 'react';
import { Image, StyleSheet } from 'react-native';

export const GridIcon = () => {
  return (
    <Image
      source={{
        uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAALdQTFRFAAAAIJ//Hqf9Hqf9Hqf9Hqf9Hqf9Hqf9Hqf9Hqf9Hqf9Hqf9Hqj9Hqf9Hqf9Hqf9Hqf9Hqf9Hqf9Hqf9Hqf9Hqf9Hqf9Hqf9Hqf9Hqf9Hqf9Hqf9Hqf9Hqf9Hqf9Hqf9Haf9Hqf9Hqf9Hqf9Hqf9Hqf9Hqf9Hqf9Hqf9Hqf9Hqf9Hqf9Hqf9Hqf9Hqf9Hqf9Hqf9Hqf9Hqb9Hqf9Hqf9Hqf9Hqf9Hqf9Hqf9Hqf9Hqf9Hqj9Hqf9Hmz01QAAAD10Uk5TAAAEGjNefYqLXDUFAjSY0e79/9KZAghmyMkBQbz6vUIBBnD1cQcOo6Sp76qBePTHVOoC+RQTX4mCDZsBMmX5zDcAAAHcSURBVHic7ZrrcoIwEIVX8W5VpAiUaq33GyJqrfby/s9VacsCDojUJNNx9vzCTLLfZJdkHM4ChJTJSrl8oVj6s4qFckWqZiBed7V6Q24qV6op36uVVgxC042rAQh60LUIhPnY7rBCuOo8dZ9PGb3+gCXC1WA4CjPGE9YIV9NxiNHmwVCUWYAy4rIPV1PMmNnnxVCUoVf9LvOa+xp0f89HqCDzhbWMle3NsuPnWIt5MF7757zogfOxcqLOEGrtzVufm6U5Kz9iR3eHNgYObNWXc4svhQDs1C0GNTbHgZp/l6hnt5ECApqKQZu1471b93O1S1h6OQR2fsbqGcg28JeTtDIFBBwM28iCJON7lZSsVBAN3zFZCpRkkbgwDQQWWJQcvOK2LLYQCwPnoYDPS7aQJQYuwJ4/ZA8l/pASQQhCEIIQhCAEIQhBghB7nSj839xMnmtHQriJIAS5IYiQw3g7dxdBCEIQghCEIAQhyH+ECPmMLsQQKOMzY2vjgIHLYkwaIXaTEOMM+FuAIMbMhJYIW1aIwczaKj9EWuVCTH++7Quml8Qev0aMnl+qtxkfxnu4cYXLXiYhhpg2H4AP1g1L7a55ygDGrVdGZOuVKwFNZN/KSp/XtsPVpOpJ0C+2naE/XA0rpwAAAABJRU5ErkJggg==',
      }}
      style={styles.navigatorIcon}
    />
  );
};

const whiteOutline =
  'data:image/png;base64,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';
const blueOutline =
  'data:image/png;base64,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';

export const StoryIcon = ({ selected }: { selected: boolean }) => {
  return (
    <Image
      source={{
        uri: selected ? whiteOutline : blueOutline,
      }}
      style={styles.navigatorIcon}
    />
  );
};

const styles = StyleSheet.create({
  navigatorIcon: {
    width: 18,
    height: 18,
    marginRight: 5,
  },
});
