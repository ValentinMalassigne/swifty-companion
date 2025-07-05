import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { borderRadius, fontSize, fontWeight, shadow, spacing } from './tokens';

export const homeStyles = StyleSheet.create({
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
  
  content: {
    flex: 1,
    padding: spacing.xl,
  },
  scrollContent: {
    flexGrow: 1,
    padding: spacing.xl,
  },
  section: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    marginBottom: spacing.xl,
    ...shadow.medium,
  },
  sectionTitle: {
    fontSize: fontSize.xl,
    fontWeight: fontWeight.bold,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  sectionDescription: {
    fontSize: fontSize.sm,
    color: colors.textSecondary,
    marginBottom: spacing.xl,
    lineHeight: spacing.xl,
  },
  
  searchContainer: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.borderDark,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    fontSize: fontSize.md,
    backgroundColor: colors.background,
  },
  searchButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
    justifyContent: 'center',
  },
  searchButtonText: {
    color: colors.textLight,
    fontSize: fontSize.md,
    fontWeight: fontWeight.semiBold,
  },
  
  oauthButton: {
    backgroundColor: colors.secondary,
    paddingVertical: spacing.lg,
    borderRadius: borderRadius.md,
    alignItems: 'center',
  },
  oauthButtonText: {
    color: colors.textLight,
    fontSize: fontSize.lg,
    fontWeight: fontWeight.bold,
  },
  
  buttonDisabled: {
    opacity: 0.6,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.md,
  },
  
  footer: {
    padding: spacing.xl,
    alignItems: 'center',
  },
  footerText: {
    fontSize: fontSize.xs,
    color: colors.textMuted,
    fontStyle: 'italic',
  },
});