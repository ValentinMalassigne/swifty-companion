import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { borderRadius, fontSize, fontWeight, shadow, spacing } from './tokens';

export const layoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  padding: {
    padding: spacing.xl,
  },
  paddingHorizontal: {
    paddingHorizontal: spacing.xl,
  },
  paddingVertical: {
    paddingVertical: spacing.xl,
  },
});

export const headerStyles = StyleSheet.create({
  header: {
    ...layoutStyles.spaceBetween,
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    ...shadow.medium,
  },
  headerTitle: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.bold,
    color: colors.textPrimary,
  },
  backButton: {
    paddingVertical: spacing.xs,
  },
  backButtonText: {
    fontSize: fontSize.md,
    color: colors.primary,
    fontWeight: fontWeight.semiBold,
  },
  placeholder: {
    width: 50,
  },
});

export const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    marginBottom: spacing.xl,
    ...shadow.medium,
  },
  cardTitle: {
    fontSize: fontSize.xl,
    fontWeight: fontWeight.bold,
    color: colors.textPrimary,
    marginBottom: spacing.xl,
    textAlign: 'center',
  },
  section: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    marginBottom: spacing.xl,
    ...shadow.medium,
  },
});

export const stateStyles = StyleSheet.create({
  loadingContainer: {
    ...layoutStyles.centered,
    padding: spacing.xl,
  },
  loadingText: {
    marginTop: spacing.lg,
    fontSize: fontSize.md,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  errorContainer: {
    ...layoutStyles.centered,
    padding: spacing.xl,
  },
  errorTitle: {
    fontSize: fontSize.xxl,
    fontWeight: fontWeight.bold,
    color: colors.error,
    marginBottom: spacing.md,
  },
  errorText: {
    fontSize: fontSize.md,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.xxxl,
    lineHeight: spacing.xxl,
  },
  errorButtons: {
    ...layoutStyles.row,
    gap: spacing.lg,
  },
});

export const textStyles = StyleSheet.create({
  title: {
    fontSize: fontSize.xxxl,
    fontWeight: fontWeight.bold,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: fontSize.md,
    color: colors.textSecondary,
    fontStyle: 'italic',
  },
  body: {
    fontSize: fontSize.md,
    color: colors.textPrimary,
  },
  bodySecondary: {
    fontSize: fontSize.md,
    color: colors.textSecondary,
  },
  caption: {
    fontSize: fontSize.sm,
    color: colors.textMuted,
  },
  link: {
    fontSize: fontSize.md,
    color: colors.primary,
    fontWeight: fontWeight.semiBold,
  },
});
