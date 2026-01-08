import React from 'react';
import { Alert } from 'react-native';
import { GroupDetail_SettingsTemplate } from '../templates/GroupDetail_SettingsTemplate';

export function GroupDetail_SettingScreen() {

  const handleLeaveGroup = () => {
    Alert.alert(
      "Leave Group", 
      "Are you sure you want to leave this group?", 
      [
        { text: "Cancel", style: "cancel" },
        { 
          text: "Leave", 
          style: "destructive", 
          onPress: () => console.log("User left group") 
        }
      ]
    );
  };

  const handleNavigate = (name: string) => {
    console.log("Navigating to: ", name);
    // navigation.navigate(name as any); 
  };

  const handleBack = () => {
    console.log("Going back...");
    // navigation.goBack(); // Quay lại màn hình trước đó
  };

  return (
    <GroupDetail_SettingsTemplate
      onLeave={handleLeaveGroup}
      onNavigate={handleNavigate}
      onBack={handleBack}
    />
  );
}