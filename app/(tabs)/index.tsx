import { Redirect } from 'expo-router';

/**
 * Index route - redirects to notification page
 * This ensures notification.tsx is the default startup page
 */
export default function Index() {
  return <Redirect href="/(tabs)/notification" />;
}
