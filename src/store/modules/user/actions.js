export function updateProfileRequest(data) {
    return {
        type: '@user/UPDATE_PROFILE_REQUEST',
        payload: data,
    }
}

export function updateProfileSuccess(updatedProfile) {
    return {
        type: '@user/UPDATE_PROFILE_SUCCESS',
        payload: updatedProfile,
    }
}

export function updateProfileFailure() {
    return {
        type: '@user/UPDATE_PROFILE_FAILURE',
    }
}


