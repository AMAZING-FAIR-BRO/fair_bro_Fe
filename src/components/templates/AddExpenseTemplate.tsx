import { View, StyleSheet, FlatList, TextInput } from 'react-native';
import { Text } from '../atoms/Text/Text';
import { Button } from '../atoms/Button/Button';
import { Input } from '../atoms/Input/Input';
import { ExpenseItem } from '../molecules/ExpenseItem/ExpenseItem';
import { PickerRow } from '../molecules/PickerRow/PickerRow';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function AddExpenseTemplate({ expenses }: { expenses: any[] }) {
  return (
    <View style={styles.screen}>

      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ExpenseItem {...item} />
        )}
        ListHeaderComponent={
          <>
            <View style={styles.card}>
              <View style={styles.headerRow}>
                <Text style={styles.cardTitle}>New Expense</Text>
                <MaterialCommunityIcons name="qrcode-scan" size={20} color="#3b82f6" />
              </View>

              <Input 
                  iconName="clipboard-text-outline" 
                  placeholder="What is this for? (e.g. Dinner)" 
                  style={styles.textInput}
              />
              
              <View style={styles.amountContainer}>
                  <Text style={styles.currencySymbol}>$</Text>
                  <TextInput 
                      style={styles.amountInput}
                      placeholder="0"
                      placeholderTextColor="#4b5563"
                      keyboardType="numeric"
                      defaultValue=""
                  />
              </View>

              <View style={styles.pickerContainer}>
                  <PickerRow 
                    label="Paid by" 
                    value="You" 
                    icon="account-outline" 
                    onPressValue={() => console.log('Mở danh sách người trả')} 
                  />
                  <PickerRow 
                    label="Split with" 
                    value="Everyone" 
                    icon="account-group-outline" 
                    onPressValue={() => console.log('Mở danh sách chia tiền')}
                  />
              </View>

              <Button title="✓ Add Expense" style={styles.addButton} />
            </View>

            <View style={styles.sectionHeader}>
              <Text style={styles.section}>Recent Activity</Text>
              <Text style={styles.seeAll}>See all</Text>
            </View>
          </>
        }
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F8F9FB',
  },
  list: {
    paddingBottom: 80,
  },
  card: {
    backgroundColor: '#FFFFFF',
    margin: 16,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#1e293b',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardTitle: {
    color: '#020617',
    fontSize: 18,
    fontWeight: '700',
  },
  textInput: {
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    marginBottom: 16,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 4,
  },
  currencySymbol: {
    color: '#64748b',
    fontSize: 24,
    marginRight: 8,
  },
  amountInput: {
    color: '#9CA3AF',
    fontSize: 32,
    fontWeight: 'bold',
    flex: 1,
    paddingVertical: 0,
  },
  pickerContainer: {
    marginBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#1e293b',
  },
  addButton: {
    backgroundColor: '#3b82f6',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  section: {
    color: '#020617',
    fontSize: 18,
    fontWeight: '600',
  },
  seeAll: {
    color: '#3b82f6',
    fontSize: 14,
  }
});