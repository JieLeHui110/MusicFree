import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import VDebug from "@/lib/react-native-vdebug";
import Config, { useAppConfig } from "@/core/appConfig";

export default function Debug() {
    const showDebug = useAppConfig("debug.devLog");

    useEffect(() => {
        if (showDebug) {
            // 添加超时自动禁用，防止应用长时间卡顿
            const timeoutId = setTimeout(() => {
                // 仅在 5 分钟后自动禁用，防止长时间卡顿
                if (Config.getConfig("debug.devLog")) {
                    console.warn("Debug panel auto-disabled after 5 minutes");
                    Config.setConfig("debug.devLog", false);
                }
            }, 5 * 60 * 1000);

            return () => clearTimeout(timeoutId);
        }
    }, [showDebug]);

    return showDebug ? (
        <View style={style.wrapper} pointerEvents="box-none">
            <VDebug />
        </View>
    ) : null;
}

const style = StyleSheet.create({
    wrapper: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        zIndex: 999,
    },
});
