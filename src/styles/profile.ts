import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { borderRadius, fontSize, fontWeight, shadow, spacing } from './tokens';

export const profileStyles = StyleSheet.create({
  profileHeader: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    marginBottom: spacing.xl,
    ...shadow.medium,
    alignItems: 'center',
  },
  
  imageContainer: {
    marginBottom: spacing.lg,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
  },
  profileImagePrimary: {
    borderColor: colors.primary,
  },
  profileImageSecondary: {
    borderColor: colors.secondary,
  },
  placeholderImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderImagePrimary: {
    backgroundColor: colors.primary,
  },
  placeholderImageSecondary: {
    backgroundColor: colors.secondary,
  },
  placeholderImageText: {
    fontSize: fontSize.huge,
    fontWeight: fontWeight.bold,
    color: colors.textLight,
  },
  
  displayName: {
    fontSize: fontSize.xxl,
    fontWeight: fontWeight.bold,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
    textAlign: 'center',
  },
  fullName: {
    fontSize: fontSize.lg,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
    textAlign: 'center',
  },
  login: {
    textAlign: 'center',
    fontSize: fontSize.md,
    marginBottom: spacing.lg,
    fontWeight: fontWeight.semiBold,
  },
  loginPrimary: {
    color: colors.primary,
  },
  loginSecondary: {
    color: colors.secondary,
  },
  
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  detailColumn: {
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  detailLabel: {
    fontSize: fontSize.md,
    fontWeight: fontWeight.semiBold,
    color: colors.textSecondary,
    flex: 1,
  },
  detailValue: {
    fontSize: fontSize.md,
    color: colors.textPrimary,
    flex: 1,
    textAlign: 'right',
  },
  detailValueLeft: {
    fontSize: fontSize.md,
    color: colors.textPrimary,
    flex: 2,
    textAlign: 'left',
  },
  failedMark: {
    fontSize: fontSize.md,
    color: colors.danger,
    flex: 1,
    textAlign: 'right',
  },
  
  tokenInfoContainer: {
    backgroundColor: colors.infoBg,
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    marginBottom: spacing.xl,
    borderLeftWidth: 4,
    borderLeftColor: colors.info,
  },
  tokenInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.infoBg,
    borderLeftColor: colors.info,
  },
  tokenLabel: {
    fontSize: fontSize.md,
    fontWeight: fontWeight.semiBold,
    color: colors.textSecondary,
    flex: 1,
  },
  tokenValue: {
    fontSize: fontSize.md,
    color: colors.textPrimary,
    flex: 2,
    textAlign: 'right',
  },
  tokenInfoText: {
    color: colors.info,
  },
  
  welcomeContainer: {
    backgroundColor: colors.successBg,
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    marginBottom: spacing.xl,
    borderLeftWidth: 4,
    borderLeftColor: colors.success,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: fontSize.xxl,
    fontWeight: fontWeight.bold,
    color: colors.success,
    marginBottom: spacing.xs,
  },
  welcomeSubtext: {
    fontSize: fontSize.md,
    color: colors.textPrimary,
  },
  
  infoBanner: {
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    borderLeftWidth: 4,
    marginVertical: spacing.lg,
  },
  infoText: {
    fontSize: fontSize.md,
    color: colors.textSecondary,
    textAlign: 'center',
  },

  eventItem: {
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  eventName: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.bold,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  eventLocation: {
    fontSize: fontSize.md,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  eventDate: {
    fontSize: fontSize.sm,
    color: colors.textSecondary,
  },

  registerButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.md,
    marginLeft: spacing.md,
  },

  registerButtonText: {
    color: colors.textLight,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.sm,
  },
});
