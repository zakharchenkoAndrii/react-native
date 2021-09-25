import React, { useState, useEffect } from 'react';

import { StoreItem } from '@storybook/client-api';
import { Text, View, StyleSheet } from 'react-native';
import { StoryContext } from '@storybook/addons';

interface Props {
  story?: StoreItem;
  url?: string;
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  helpContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const StoryView = ({ story, url }: Props) => {
  const [context, setContext] = useState<StoryContext | undefined>(undefined);
  const id = story?.id;

  useEffect(() => {
    const loadContext = async () => {
      if (story && story.unboundStoryFn && story.applyLoaders) {
        setContext(await story.applyLoaders());
      }
    };
    loadContext();
  }, [story, id]);

  if (story && story.unboundStoryFn) {
    const { unboundStoryFn } = story;
    return (
      <View key={id} testID={id} style={styles.container}>
        {context && context.id === story.id ? unboundStoryFn(context) : null}
      </View>
    );
  }
  if (url && url.length) {
    return (
      <View style={styles.helpContainer}>
        <Text>
          Please open the Storybook UI ({url}) with a web browser and select a story for preview.
        </Text>
      </View>
    );
  } else {
    return (
      <View style={styles.helpContainer}>
        <Text>Please open navigator and select a story to preview.</Text>
      </View>
    );
  }
};

export default StoryView;
