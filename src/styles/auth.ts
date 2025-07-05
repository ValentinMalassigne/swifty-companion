import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { borderRadius, fontSize, fontWeight, spacing } from './tokens';

export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: spacing.xl,
  },
  spinner: {
    marginBottom: spacing.xl,
  },
  title: {
    fontSize: fontSize.xxl,
    fontWeight: fontWeight.bold,
    color: colors.textPrimary,
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: fontSize.md,
    color: colors.textSecondary,
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  info: {
    fontSize: fontSize.sm,
    color: colors.textMuted,
    fontStyle: 'italic',
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  redirect: {
    fontSize: fontSize.xs,
    color: colors.secondary,
    fontWeight: fontWeight.bold,
    marginBottom: spacing.xl,
    textAlign: 'center',
  },
  
  codeContainer: {
    backgroundColor: colors.successBg,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    borderLeftWidth: 4,
    borderLeftColor: colors.success,
    alignSelf: 'stretch',
  },
  codeLabel: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.bold,
    color: colors.success,
    marginBottom: spacing.xs,
  },
  codeValue: {
    fontSize: fontSize.xs,
    color: colors.textPrimary,
    fontFamily: 'monospace',
    backgroundColor: colors.surface,
    padding: spacing.sm,
    borderRadius: borderRadius.sm,
  },
  
  authInfo: {
    backgroundColor: colors.warningBg,
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    borderLeftWidth: 4,
    borderLeftColor: colors.accent,
    alignItems: 'center',
    marginVertical: spacing.lg,
  },
  authInfoTitle: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.bold,
    color: colors.accent,
    marginBottom: spacing.md,
  },
  authInfoText: {
    fontSize: fontSize.md,
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: spacing.xs,
    fontWeight: fontWeight.semiBold,
  },
  authInfoSubtext: {
    fontSize: fontSize.sm,
    color: colors.accent,
    textAlign: 'center',
  },
});