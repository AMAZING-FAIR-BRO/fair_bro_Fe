import { ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '../atoms/Text/Text';
import { Button } from '../atoms/Button/Button';
import { SettingRow } from '../molecules/SettingRow/SettingRow';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface GroupDetail_SettingsTemplateProps {
  onLeave: () => void;
  onNavigate: (settingName: string) => void;
  onBack: () => void;
}

export function GroupDetail_SettingsTemplate({ onLeave, onNavigate, onBack }: GroupDetail_SettingsTemplateProps) {
  return (
    <View style={styles.wrapper}>
      

      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* 1. Group Info Card */}
        <View style={styles.card}>
          <View style={styles.groupHeader}>
            <View style={styles.iconBox}>
              <MaterialCommunityIcons name="airplane" size={30} color="#fff" />
            </View>
            <View>
              <Text style={styles.groupName}>Da Lat Trip</Text>
              <Text style={styles.subText}>Created on Jan 1, 2026</Text>
            </View>
          </View>
          <Button title="Edit Group Info" style={styles.editBtn} />
        </View>

        {/* 2. Members Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Members (3)</Text>
          <TouchableOpacity><Text style={styles.addText}>+ Add</Text></TouchableOpacity>
        </View>
        <View style={styles.card}>
          <MemberItem name="You" role="Admin" initial="Y" color="#0ea5e9" />
          <MemberItem name="Sarah" role="Member" initial="S" color="#d946ef" />
          <MemberItem name="Michael" role="Member" initial="M" color="#3b82f6" isLast />
        </View>

        {/* 3. Menu Options */}
        <View style={styles.card}>
          <SettingRow label="Notifications" onPress={() => onNavigate('Notifications')} />
          <SettingRow label="Currency" value="VND" onPress={() => onNavigate('Currency')} />
          <SettingRow label="Export Data" onPress={() => onNavigate('Export')} />
          <SettingRow label="About & Help" isLast onPress={() => onNavigate('Help')} />
        </View>

        {/* 4. Leave Group */}
        <TouchableOpacity style={styles.leaveBtn} onPress={onLeave}>
          <Text style={styles.leaveText}>Leave Group</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

// Sub-component cho Member
function MemberItem({ name, role, initial, color, isLast }: any) {
  return (
    <View style={[styles.memberItem, isLast && { borderBottomWidth: 0 }]}>
      <View style={[styles.avatar, { backgroundColor: color }]}>
        <Text style={styles.avatarText}>{initial}</Text>
      </View>
      <View>
        <Text style={styles.memberName}>{name}</Text>
        <Text style={styles.subText}>{role}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { 
    flex: 1, 
    backgroundColor: '#eaedf2ff' 
  },
  container: { 
    flex: 1 
  },
  scrollContent: {
    paddingBottom: 40,
  },
  card: { 
    backgroundColor: '#F3F4F6', 
    marginHorizontal: 16, 
    borderRadius: 16, 
    marginBottom: 20, 
    overflow: 'hidden' 
  },
  groupHeader: { flexDirection: 'row', padding: 16, alignItems: 'center' },
  iconBox: { 
    width: 60, 
    height: 60, 
    borderRadius: 12, 
    backgroundColor: '#6366f1', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginRight: 16 
  },
  groupName: { color: '#020617', fontSize: 20, fontWeight: 'bold' },
  subText: { color: '#94a3b8', fontSize: 13 },
  editBtn: { backgroundColor: '#1e293b', margin: 16, marginTop: 0 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: 10 },
  sectionTitle: { color: '#020617', fontSize: 18, fontWeight: 'bold' },
  addText: { color: '#3b82f6' },
  memberItem: { flexDirection: 'row', padding: 12, alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#afb7c4ff' },
  avatar: { width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  avatarText: { color: '#fff', fontWeight: 'bold' },
  memberName: { color: '#020617', fontSize: 16, fontWeight: '600' },
  leaveBtn: { 
    backgroundColor: '#1e1b1b',   
    margin: 16, 
    padding: 16, 
    borderRadius: 12, 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: '#451a1a' 
  },
  leaveText: { color: '#ef4444', fontWeight: 'bold', fontSize: 16 }
});