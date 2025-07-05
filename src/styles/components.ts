import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { borderRadius, fontSize, fontWeight, spacing } from './tokens';

// Button styles
export const buttonStyles = StyleSheet.create({
  base: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.secondary,
  },
  success: {
    backgroundColor: colors.success,
  },
  muted: {
    backgroundColor: colors.staff,
  },
  disabled: {
    opacity: 0.6,
  },
  text: {
    fontSize: fontSize.md,
    fontWeight: fontWeight.semiBold,
    color: colors.textLight,
  },
});

export const inputStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.borderDark,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    fontSize: fontSize.md,
    backgroundColor: colors.background,
  },
  inputFocused: {
    borderColor: colors.primary,
  },
});

export const badgeStyles = StyleSheet.create({
  badge: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.xl,
  },
  staff: {
    backgroundColor: colors.staff,
  },
  alumni: {
    backgroundColor: colors.alumni,
  },
  active: {
    backgroundColor: colors.active,
  },
  inactive: {
    backgroundColor: colors.inactive,
  },
  text: {
    color: colors.textLight,
    fontSize: fontSize.xs,
    fontWeight: fontWeight.bold,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: spacing.sm,
  },
});

export const dividerStyles = StyleSheet.create({
  horizontal: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.md,
  },
  vertical: {
    width: 1,
    backgroundColor: colors.border,
    marginHorizontal: spacing.md,
  },
});
