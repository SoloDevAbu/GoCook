import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { Colors } from '@/constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';

export default function AppTabs() {
  return (
    <NativeTabs
      backgroundColor={Colors.surfaceContainerLowest}
      indicatorColor={Colors.primaryContainer}
      labelStyle={{ selected: { color: Colors.primary } }}>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={require('@/assets/images/tabIcons/home.png')}
          renderingMode="template"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="search">
        <NativeTabs.Trigger.Label>Search</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={require('@/assets/images/tabIcons/explore.png')}
          renderingMode="template"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="cart">
        <NativeTabs.Trigger.Label>Cart</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={require('@/assets/images/tabIcons/explore.png')} // fallback icon
          renderingMode="template"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={require('@/assets/images/tabIcons/explore.png')} // fallback icon
          renderingMode="template"
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

